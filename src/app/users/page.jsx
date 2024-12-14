"use client";

import { getUsers } from "@/slice/userSlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

function Users() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  
  return <div>Users</div>;
}

export default Users;
