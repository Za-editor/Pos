import { Suspense } from "react";
import VerifyOtpClient from "./VerifyOtpClient";

export default function LoginPage() {
  return (
    <Suspense fallback={null}>
      <VerifyOtpClient/>
    </Suspense>
  );
}
