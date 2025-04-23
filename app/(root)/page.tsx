import InterviewCard from "@/components/InterviewCard";
import { Button } from "@/components/ui/button";
import { dummyInterviews } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get Interview-Ready with AI-Powered Practice & Feedback</h2>
          <p>Practice on real interview questions & get instant feedback </p>
          <Button asChild className="btn-primary max-sm:w-full">
            <Link href={"/interview"}>Start an Interview</Link>
          </Button>
        </div>
        <Image
          className="max-md:hidden"
          src={"/robot.png"}
          alt="Robot Image"
          width={400}
          height={400}
        />
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Your Interviews</h2>
        <div className="interview-section">
          <p>You haven&apos;t taken any interviews yet</p>
          {dummyInterviews.map((interview, idx) => (
            <InterviewCard {...interview} />
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Take an Interview</h2>
        <div className="interview-section">
          <p>There are no interviews available</p>
          {dummyInterviews.map((interview, idx) => (
            <InterviewCard {...interview} />
          ))}
        </div>
      </section>
    </>
  );
};

export default page;
