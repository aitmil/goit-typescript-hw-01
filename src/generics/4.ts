type UserProfile = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<UserProfile>) {
  // Оновлення користувача
  return { ...initialValues };
}

createOrUpdateUser({
  email: 'user@mail.com',
  password: 'password123',
});
