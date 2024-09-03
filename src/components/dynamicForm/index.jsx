import React from "react";
import styles from "./styles.module.css";
import { useForm } from "react-hook-form";

export default function DynamicForm() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const firstInput = watch("firstInput", "");

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h1>FORM</h1>
          <label>First Field</label>
          <input
            type="text"
            placeholder="Minimum 6 characters*"
            className={`${styles.firstInput} ${
              errors.firstInput ? styles.firstInputError : ""
            }`}
            {...register("firstInput", {
              required: "First Field is required",
              minLength: {
                value: 6,
                message: "Minimum length is 6 characters",
              },
            })}
          />
          {errors.firstInput && <p>{errors.firstInput.message}</p>}
        </div>

        {/* Second field input */}
        {firstInput.length >= 6 && (
          <div>
            <label>Second Field</label>
            <input
              type="text"
              className={`${styles.secondInput} ${
                errors.secondInput ? styles.secondInputError : ""
              }`}
              {...register("secondInput", {
                required: "Second Field is required",
              })}
            />
            {errors.secondInput && <p>{errors.secondInput.message}</p>}
          </div>
        )}

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
