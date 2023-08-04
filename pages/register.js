import React from "react";
import { Controller, useForm } from "react-hook-form";
import Input from "../components/input";
import Label from "../components/label";

const Register = () => {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 bg-white rounded-md shadow-md lg:max-w-xl">
        {/* <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"> */}
        <img
          class="w-8 h-8 mr-2"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
          alt="logo"
        />
        Flowbite
        {/* </a> */}
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create and account
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                <Controller
                  name="email"
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <div className="mb-4">
                      <Label htmlFor="email" />
                      <Input
                        type="email"
                        control={control}
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                      />
                    </div>
                  )}
                />
                <Controller
                  name="password"
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <div className="mb-2">
                      <Label htmlFor="password" />
                      <Input
                        type="password"
                        control={control}
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        placeholder="••••••••"
                      />
                    </div>
                  )}
                />
                <Controller
                  name="confirm-password"
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <div className="mb-2">
                      <Label htmlFor="confirm-password" />
                      <Input
                        type="password"
                        control={control}
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        placeholder="••••••••"
                      />
                    </div>
                  )}
                />

                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div class="ml-3 text-sm">
                    <label
                      for="terms"
                      class="font-light text-gray-500 dark:text-gray-300"
                    >
                      I accept the{" "}
                      {/* <a
                        class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        href="#"
                      >
                        Terms and Conditions
                      </a> */}
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Create an account
                </button>
                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <a
                    href="/login"
                    class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Login here
                  </a>
                </p>
              </form>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
