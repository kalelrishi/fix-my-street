"use client";

import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-yellow-50 px-6 py-24">
      <motion.div
        className="mx-auto max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Heading */}
        <motion.h1
          className="text-5xl font-bold leading-tight text-black"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Report civic issues <br />
          with clarity and proof.
        </motion.h1>

        {/* Description */}
        <motion.p
          className="mt-6 max-w-xl text-lg text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.6 }}
        >
          Fix My Street enables citizens to report potholes, garbage,
          and public hazards using photos and live location so
          municipalities can respond faster and transparently.
        </motion.p>

        {/* Actions */}
        <motion.div
          className="mt-10 flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <motion.a
            href="/report"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-xl bg-black px-8 py-4 text-base font-semibold text-white shadow-sm"
          >
            Report an Issue
          </motion.a>

          <motion.a
            href="/issues"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-xl border-2 border-black/10 bg-white px-8 py-4 text-base font-semibold text-black"
          >
            View Public Issues
          </motion.a>
        </motion.div>

        {/* Footer line */}
        <motion.div
          className="mt-24 border-t border-yellow-200 pt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <p className="text-sm text-gray-700">
            Designed for accountability, transparency, and faster
            municipal action.
          </p>
        </motion.div>
      </motion.div>
    </main>
  );
}
