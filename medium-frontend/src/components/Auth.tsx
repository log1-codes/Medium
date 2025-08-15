import { Link } from "react-router-dom";
import LabelledInput from "../components/Input";
import { useState } from "react";
import type { SignupInput } from "@anurag100xdev/medium-common";

const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    username: "",
    password: ""
  });

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col items-center w-full max-w-md px-6 py-8 bg-white rounded-lg shadow">
        
        {/* Dynamic Heading */}
        <div className="text-3xl font-bold mb-2">
          {type === "signup" ? "Create an account" : "Welcome back"}
        </div>

        {/* Dynamic Subtext + Link */}
        <div className="text-slate-500 mb-6 text-sm">
          {type === "signup" ? (
            <>
              Already have an account?{" "}
              <Link to="/signin" className="text-blue-600 underline">
                Login
              </Link>
            </>
          ) : (
            <>
              Don’t have an account?{" "}
              <Link to="/signup" className="text-blue-600 underline">
                Sign up
              </Link>
            </>
          )}
        </div>

        {/* Form Inputs */}
        <div className="flex flex-col w-full gap-4">
          {type === "signup" && (
            <LabelledInput
              label="Name"
              placeholder="Enter your name"
              onChange={(e) =>
                setPostInputs((c) => ({
                  ...c,
                  name: e.target.value
                }))
              }
            />
          )}
          <LabelledInput
            label="Username"
            placeholder="Enter your username"
            onChange={(e) =>
              setPostInputs((c) => ({
                ...c,
                username: e.target.value
              }))
            }
          />
          <LabelledInput
            label="Password"
            type="password"
            placeholder="Enter your password"
            onChange={(e) =>
              setPostInputs((c) => ({
                ...c,
                password: e.target.value
              }))
            }
          />
        </div>

        {/* Submit Button */}
        <button className="w-full bg-black text-white mt-6 px-4 py-2 rounded hover:bg-gray-800 transition">
          {type === "signup" ? "Sign Up" : "Sign In"}
        </button>
      </div>
    </div>
  );
};

export default Auth;
