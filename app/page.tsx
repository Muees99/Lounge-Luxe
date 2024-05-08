"use client";
import HomeLayout from "@/app/layout/HomeLayout"
import { Suspense } from "react";
import { FiLoader } from "react-icons/fi";



const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-screen">
    <FiLoader className="animate-spin h-12 w-12 text-yellow-400" />
  </div>
);

export default function Home() {
  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <HomeLayout>
          <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
        </HomeLayout>
      </Suspense>
    </>
  );
}
