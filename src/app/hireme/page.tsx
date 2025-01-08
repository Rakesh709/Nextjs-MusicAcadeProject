"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { LinkPreview } from "@/components/ui/link-preview";

function HireMe() {
  return (
    <div>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 10 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-5xl"
        >
          <p>
            Independently trained{" "}
            <LinkPreview
              url="https://rakesh-portfolio-react.netlify.app/"
              className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
            >
              developer
            </LinkPreview>{" "}
          </p>{" "}
          <br />
          <div>driven by <LinkPreview url="https://www.youtube.com/@bucketflow" className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500">curiosity</LinkPreview> and a love for <LinkPreview url="https://github.com/Rakesh709" className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500">code</LinkPreview></div>
        </motion.h1>
      </LampContainer>
    </div>
  );
}

export default HireMe;
