"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Globe, Github, X, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export function CreatorWidget() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.12 }}
            className="w-72 bg-white dark:bg-zinc-900 rounded-xl shadow-xl overflow-hidden mb-3 relative p-5 border-none"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsExpanded(false)}
              className="absolute top-4 right-4 p-1 text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
              aria-label="Close widget"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Profile Section */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                {/* Avatar Image */}
                <Image
                  src="/tommy_jepsen.jpeg"
                  alt="Tommy Jepsen"
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-full object-cover grayscale"
                />
                <div>
                  <h3 className="font-bold text-sm text-black dark:text-white leading-tight">Tommy Jepsen</h3>
                  <p className="text-[11px] text-zinc-400">Design Engineer</p>
                </div>
              </div>

              {/* Bio Pitch */}
              <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed py-2 border-t border-b border-zinc-100 dark:border-zinc-800">
                I build interactive web tools (like <a href="https://github.com/tommyjepsen/twblocks" target="_blank" rel="noopener noreferrer" className="underline font-semibold hover:opacity-75 transition-opacity">twblocks</a>) and share design & AI insights.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 pt-1">
                <a
                  href="https://linkedin.com/in/toje"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 w-full py-2 bg-black hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-200 text-white dark:text-black font-semibold text-xs rounded transition-colors"
                >
                  <Linkedin className="h-3.5 w-3.5 fill-current" />
                  <span>Follow on LinkedIn</span>
                  <ArrowUpRight className="h-3 w-3" />
                </a>

                <div className="flex items-center justify-center gap-4 text-xs text-zinc-400 dark:text-zinc-500">
                  <a
                    href="https://tommyjepsen.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:text-black dark:hover:text-white transition-colors"
                  >
                    <Globe className="h-3.5 w-3.5" />
                    <span>Website</span>
                  </a>
                  <span className="opacity-30">•</span>
                  <a
                    href="https://github.com/tommyjepsen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:text-black dark:hover:text-white transition-colors"
                  >
                    <Github className="h-3.5 w-3.5" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Trigger Badge */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="flex items-center gap-2 px-3 py-1.5 bg-zinc-50 dark:bg-zinc-900 text-black dark:text-white font-medium text-xs hover:bg-zinc-100 dark:hover:bg-zinc-850 transition-colors rounded-full cursor-pointer select-none"
      >
        <Image
          src="/tommy_jepsen.jpeg"
          alt="Tommy Jepsen Thumbnail"
          width={18}
          height={18}
          className="h-4.5 w-4.5 rounded-full object-cover grayscale"
        />
        <span>Made by <strong className="font-semibold">@Tommy</strong></span>
        <span>✌️</span>
      </motion.button>
    </div>
  );
}

// Compact banner to embed in modals
export function CreatorModalSection({ title = "Follow the creator" }: { title?: string }) {
  return (
    <div className="bg-zinc-50 dark:bg-zinc-900/40 rounded-xl p-4 mt-4 flex flex-col gap-3">
      <div className="flex items-center gap-2.5">
        <Image
          src="/tommy_jepsen.jpeg"
          alt="Tommy Jepsen"
          width={32}
          height={32}
          className="h-8 w-8 rounded-full object-cover grayscale"
        />
        <div>
          <h4 className="font-bold text-xs text-black dark:text-white leading-tight">Tommy Jepsen</h4>
          <p className="text-[10px] text-zinc-400">Design Engineer</p>
        </div>
      </div>

      <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
        I share daily AI & Design tricks and premium resources on LinkedIn.
      </p>

      <a
        href="https://linkedin.com/in/toje"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-1.5 bg-black hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-200 text-white dark:text-black font-semibold text-xs rounded transition-colors text-center"
      >
        <span>Follow me on LinkedIn</span>
      </a>
    </div>
  );
}
