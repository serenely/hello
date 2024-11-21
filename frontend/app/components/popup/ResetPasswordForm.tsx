"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import navLogo from "@/app/public/signupNavLogo.svg";
import signupLogo from "@/app/public/signupLogo.svg";
import signupWallpaper from "@/app/public/signupWallpaper.png";
import showPasswordIcon from "@/app/public/showPasswordIcon.svg";
import { useRouter } from "next/navigation";

const SetNewPasswordForm: React.FC = () => {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [passwordMatch, setPasswordMatch] = useState<boolean>(true);
  const [passwordError, setPasswordError] = useState<string>("");
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] =
    useState<boolean>(false);

  const router = useRouter(); // Hook for programmatic navigation

  const validatePassword = (password: string): void => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;

    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must be at least 8 characters long, include one uppercase letter, one lowercase letter, and one number."
      );
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPasswordMatch(false);
      return;
    }

    validatePassword(password);

    if (passwordError) {
      return;
    }

    console.log(password); // Placeholder for password update logic (API call)
    alert("Your password has been successfully updated.");

    // Reset the form and error states after successful submit
    setPassword("");
    setConfirmPassword("");
    setPasswordError("");
    setPasswordMatch(true);

    // Redirect user to the login page after the alert
    router.push("/login");
  };

  const togglePasswordVisibility = (): void => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = (): void => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <div className="min-h-screen flex flex-col ">
      {/* Navbar */}
      <div className="flex justify-center items-center h-[55px] bg-white">
        <Image
          src={navLogo}
          alt="Logo linking to the homepage"
          className="w-[40px] h-[40px]"
        />
      </div>

      <hr className="border-gray-300" />

      <div className="flex flex-1 flex-col md:flex-row">
        {/* Left Form Section */}
        <div className="flex-1 flex justify-center items-start p-4 md:p-0 md:-mr-32 md:pl-10 lg:pl-0 z-10">
          <div className="bg-white rounded-lg max-w-lg mx-auto pt-8 md:pt-16 px-6 md:px-0 w-full">
            <div className="text-center mb-10">
              <div className="flex justify-center ">
                <Image
                  src={signupLogo}
                  alt="Signup logo"
                  className="w-96"
                  priority
                />
              </div>

              <h1 className="text-[30px] font-bold text-[#4A4744]">
                Set your new password
              </h1>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Password Input */}
              <div className="mb-4 relative">
                <label htmlFor="password" className="text-gray-700 flex mb-1">
                  Enter your new password:
                </label>

                <input
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Enter new password..."
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    validatePassword(e.target.value);
                  }}
                  className="italic w-full px-4 py-2 border border-[#4A4744] rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300"
                  required
                />

                <div
                  className="absolute right-3 top-10 cursor-pointer z-10"
                  onClick={togglePasswordVisibility}
                >
                  <Image
                    src={showPasswordIcon}
                    alt="Toggle password visibility"
                  />
                </div>

                {passwordError && (
                  <p className="text-red-500 text-sm mt-2">{passwordError}</p>
                )}
              </div>

              {/* Confirm Password Input */}
              <div className="mb-4 relative">
                <label
                  htmlFor="confirmPassword"
                  className="text-gray-700  flex mb-1"
                >
                  Confirm your new password:
                </label>

                <input
                  type={confirmPasswordVisible ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm your password..."
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="italic w-full px-4 py-2 border border-[#4A4744] rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300"
                  required
                />

                <div
                  className="absolute right-3 top-10 cursor-pointer z-10"
                  onClick={toggleConfirmPasswordVisibility}
                >
                  <Image
                    src={showPasswordIcon}
                    alt="Toggle password visibility"
                  />
                </div>

                {!passwordMatch && (
                  <p className="text-red-500 text-sm mt-2">
                    Passwords do not match!
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-2 bg-[#BD71D4] text-white rounded-md hover:bg-[#a361b8] transition"
              >
                Submit new password
              </button>
            </form>

            <p className="text-center mt-4">
              <Link
                href="/login"
                className="text-[#BD71D4] font-semibold italic hover:underline"
              >
                Back to log in
              </Link>
            </p>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative flex-1 pr-44 ml-10">
          <Image
            src={signupWallpaper}
            alt="Signup background wallpaper"
            className="absolute top-0 left-0 w-full h-full"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default SetNewPasswordForm;