"use client";

import React from "react";
import { useForm } from "react-hook-form";

function Form() {
  const {
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      first_name: "",
      last_name: "",
      phone: "",
      email: "",
      occasion: "",
      requests: "",
    },
  });
  return (
    <div className="mt-10 flex flex-wrap justify-between w-[660px]">
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4"
        placeholder="First name"
        {...register("first_name", { required: "First naeme is required" })}
      />
      {errors.first_name && (
        <p className="text-red-500">{errors.first_name?.message}</p>
      )}
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4"
        placeholder="Last name"
        {...register("last_name", { required: "Last name is required" })}
      />
      {errors.last_name && (
        <p className="text-red-500">{errors.last_name?.message}</p>
      )}
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4"
        placeholder="Phone number"
        {...register("phone", {
          required: "Phone number is required",
          min: { value: 10, message: "The Phone number must be 10 digits  " },
        })}
      />
      {errors.phone && <p className="text-red-500">{errors.phone?.message}</p>}
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4"
        placeholder="Email"
        {...register("email", { required: "Email is required" })}
      />
      {errors.email && <p className="text-red-500">{errors.email?.message}</p>}
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4"
        placeholder="Occasion (optional)"
        {...register("occasion", { required: "Occasion is required" })}
      />
      {errors.occasion && (
        <p className="text-red-500">{errors.occasion?.message}</p>
      )}
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4"
        placeholder="Requests (optional)"
        {...register("requests", { required: "Requests is required" })}
      />
      {errors.requests && (
        <p className="text-red-500">{errors.requests?.message}</p>
      )}
      <button className="bg-red-600 w-full p-3 text-white font-bold rounded disabled:bg-gray-300">
        Complete reservation
      </button>
      <p className="mt-4 text-sm">
        By clicking “Complete reservation” you agree to the OpenTable Terms of
        Use and Privacy Policy. Standard text message rates may apply. You may
        opt out of receiving text messages at any time.
      </p>
    </div>
  );
}

export default Form;
