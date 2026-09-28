export const SignupValidation = (payload) => {
  const { name, email, password, confirmPassword } = payload;

  if (!name) {
    return {
      error: true,
      message: "name is required",
    };
  }

  if (!email) {
    return {
      error: true,
      message: "email is required",
    };
  }

  if (!password) {
    return {
      error: true,
      message: "password is required",
    };
  }

  if (password !== confirmPassword) {
    return {
      error: true,
      message: "password and confirm password should be equal",
    };
  }

  if (!confirmPassword) {
    return {
      error: true,
      message: "confirm password is required",
    };
  }

  if (name.length > 20) {
    return {
      error: true,
      message: "name cannot be greater than 20 characters",
    };
  }

  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email,
  );

  const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(password);

  if (!isEmailValid) {
    return {
      error: true,
      message: "email is invalid",
    };
  }

  if (!isPasswordValid) {
    return {
      error: true,
      message:
        "password must contain at least 8 characters, one letter and one number",
    };
  }

  if (password !== confirmPassword) {
    return {
      error: true,
      message: "password and confirm password do not match",
    };
  }

  return {
    error: false,
    message: "validation successful",
  };
};

export const SignInValidation = (payload) => {
  const { email, password, userPassword, userEmail } = payload;

  if (!email) {
    return {
      error: true,
      message: "email is required",
    };
  }

  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email,
  );
  if (!isEmailValid) {
    return {
      error: true,
      message: "email is invalid",
    };
  }

  if (!password) {
    return {
      error: true,
      message: "password is required",
    };
  }

  if (email !== userEmail) {
    return {
      error: true,
      message: "Invalid user please check your credentials",
    };
  }

  if (password !== userPassword) {
    return {
      error: true,
      message: "Invalid user please check your credentials",
    };
  }

  return {
    error: false,
    message: "validation successful",
  };
};

export const TodoValidation = (todo) => {
  if (!todo) {
    return {
      error: true,
      message: "Please add your todo item",
    };
  }

  return {
    error: false,
    message: "validation successful",
  };
};
