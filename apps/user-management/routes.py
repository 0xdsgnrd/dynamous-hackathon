"""API routes for user management."""

from uuid import UUID

from fastapi import APIRouter, HTTPException, status

from models import User, UserCreate, UserResponse, UserUpdate

router = APIRouter(prefix="/users", tags=["users"])

# In-memory storage (replace with database in production)
users_db: dict[UUID, User] = {}


@router.post("/", response_model=UserResponse, status_code=status.HTTP_201_CREATED)
async def create_user(user_data: UserCreate) -> UserResponse:
    """Create a new user."""
    # Check if email already exists
    for user in users_db.values():
        if user.email == user_data.email:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Email already registered",
            )

    user = User(**user_data.model_dump(exclude={"password"}))
    users_db[user.id] = user
    return UserResponse(**user.model_dump())


@router.get("/", response_model=list[UserResponse])
async def list_users() -> list[UserResponse]:
    """List all users."""
    return [UserResponse(**user.model_dump()) for user in users_db.values()]


@router.get("/{user_id}", response_model=UserResponse)
async def get_user(user_id: UUID) -> UserResponse:
    """Get a specific user by ID."""
    if user_id not in users_db:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found",
        )
    return UserResponse(**users_db[user_id].model_dump())


@router.patch("/{user_id}", response_model=UserResponse)
async def update_user(user_id: UUID, user_data: UserUpdate) -> UserResponse:
    """Update an existing user."""
    if user_id not in users_db:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found",
        )

    user = users_db[user_id]
    update_data = user_data.model_dump(exclude_unset=True)
    updated_user = user.model_copy(update=update_data)
    users_db[user_id] = updated_user
    return UserResponse(**updated_user.model_dump())


@router.delete("/{user_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_user(user_id: UUID) -> None:
    """Delete a user."""
    if user_id not in users_db:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found",
        )
    del users_db[user_id]
