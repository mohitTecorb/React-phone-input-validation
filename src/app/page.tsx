
'use client'
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
export default function Home() {

  const [countryCode, setCountryCode] = useState("")
  const [phoneNo, setPhoneNo] = useState("")
  const { register, handleSubmit, setError, formState: { errors }, control, reset, setValue, } = useForm({
    defaultValues: {
      mobileNo: "",
    },
  });
  const handleChange = (phone: any, country_name: any) => {
    let country_code = `+${country_name.dialCode}`;
    setCountryCode(country_code);
    setPhoneNo(phone);
  };
  const Register = {
    Mobile_Number: {
      required: 'Please enter mobile number.',
      minLength: {
        value: 10,
        message: 'Please enter valid mobile number.',
      },
    },
  };
  const onSubmit = (data: any) => {
    alert(`The Mobile number is:   +${data.mobileNo}`);
  }
 
  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-10">React-Phone-Input Validation with Use-form </h1>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="">
            <label htmlFor="Mobile Number">Mobile number</label>
            <div className="mb-3">
              <Controller
                name="mobileNo"
                control={control}
                rules={{ ...Register.Mobile_Number }}
                render={({ field: { onChange, value } }: any) => (
                  <PhoneInput
                    prefix="+"
                    value={value}
                    onChange={(phone, country_name) => {
                      handleChange(phone, country_name);
                      onChange(phone, country_name);
                    }}
                    country={"dk"}
                    countryCodeEditable={false}
                  />
                )}
              />
            </div>
            <p className="text-red-600">{errors.mobileNo?.message}</p>
          </div>
          <button type="submit" className="py-5 px-10 my-10 bg-slate-300">Click Me!</button>
        </form>
      </div>
      <div>
        <p>Country code is : {countryCode}</p>
        <p>Phone number is: {phoneNo}</p>
      </div>
    </div>
  )
}
