import { Suspense } from "react";
import VerifyPasswordOtpClient from "./VerifyPasswordOtpClient";


export default function RegisterPage() {
  return (
    <Suspense fallback={null}>
      <VerifyPasswordOtpClient />
    </Suspense>
  );
}
