"use client";

import React, { useState } from "react";
import CustomTextField from "@components/TextFeilds/CustomTextField";
import CustomButton from "@components/Buttons/NormalBtn";
import CustomIconButton from "@components/Buttons/CustomIconButton";
import { Google, FacebookOutlined, Twitter } from "@mui/icons-material";
import {
  Checkbox,
  CircularProgress,
  FormControlLabel,
  Grid,
  Link,
} from "@mui/material";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const Login = () => {
  const { data: session, status } = useSession();
  if (session) {
    redirect("/");
  }
  const [prograssing, setProgressing] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //handler for submit button
  const handleButtonClick = async (event: void) => {
    setProgressing(true);
    try {
      signIn("credentials", {
        redirect: false,
        password: password,
        email: email,
      });
      setProgressing(false);
      redirect("/");
    } catch (error) {
      setProgressing(false);
      // alert("Failed to login");
    }
  };

  return (
    <div className="mx-8 my-10 mb-5 ">
      <header className="  flex flex-col gap-4 items-center ">
        <h1 className=" text-4xl font-bold">Sales Agent Sign Up</h1>
        <p className="text-center">
          Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent perlvinar.
          Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna.
          Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet
          lacinia. Aliquam in elementum tellus.
        </p>
      </header>

      <form className=" flex flex-col gap-5 p-10 rounded-lg sm:w-3/5 md:w-1/2 lg:w-1/2  m-auto mt-10 min-w-sm bg-slate-100  border-4 border-slate-400">
        {prograssing ? (
          <div className="flex flex-col gap-5 ">
            <CircularProgress color="success" className="" />
          </div>
        ) : (
          <div className=" flex flex-col gap-5 ">
            <CustomTextField
              id="Email"
              label="Email"
              name="Email"
              type="text"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <CustomTextField
              id="Password"
              label="Password"
              type="password"
              name="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              width="100%"
            />
          </div>
        )}

        <Grid container>
          <Grid item xs>
            <Grid item>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
            </Grid>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2">
              {"Forgot password?"}
            </Link>
          </Grid>
        </Grid>

        <CustomButton
          onClick={handleButtonClick}
          fullWidth
          variant="contained"
          color="primary"
          backgroundColor="#48D89B"
          textColor="#000"
        >
          Sign Up
        </CustomButton>

        {/* social media section */}
        <hr className="border-b-2 " />

        <div className=" flex flex-col gap-4  justify-between items-center">
          <h2>Or login with</h2>

          <div className="flex flex-wrap items-center gap-3 justify-center lg:justify-center w-full space-x-1  lg:flex-row md:flex-col sm:flex-col">
            <CustomIconButton
              onClick={() => {
                signIn("google");
              }}
              size="large"
              startIcon={<Google />}
              backgroundColor="#fff"
              iconColor="#0F62FE"
              textColor="#0F62FE"
            >
              Google
            </CustomIconButton>
            <CustomIconButton
              onClick={() => {
                signIn("facebook");
              }}
              size="large"
              startIcon={<FacebookOutlined />}
              backgroundColor="#fff"
              iconColor="#0F62FE"
              textColor="#0F62FE"
            >
              FaceBook
            </CustomIconButton>
            <CustomIconButton
              onClick={() => {
                signIn("twitter");
              }}
              size="large"
              startIcon={<Twitter />}
              backgroundColor="#fff"
              iconColor="#0F62FE"
              textColor="#0F62FE"
            >
              Twitter
            </CustomIconButton>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
