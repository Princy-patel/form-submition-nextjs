"use server";

export const formSubmit = async function (preState, formData) {
  const value = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  return {
    ...preState,
    data: value,
  };
};
