"use client"

import { Mic, Search, Send } from "lucide-react"

export default function ChatInput() {
  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <div className="relative flex items-center group">
        <div className="absolute left-4 text-indigo-500/60">
          <Search className="w-5 h-5" />
        </div>
        <input
          type="text"
          placeholder="Chat here..."
          className="w-full px-12 py-3 bg-slate-900/80 text-white rounded-xl 
                   border border-cyan-500/20 focus:outline-none focus:border-indigo-500/50 
                   focus:ring-1 focus:ring-indigo-500/50 placeholder:text-slate-400"
        />
        <div className="absolute right-4 flex items-center space-x-2">
          <button
            className="p-2 rounded-lg hover:bg-slate-800/80 transition-colors duration-200 
                     text-slate-400 hover:text-indigo-400"
          >
            <Mic className="w-5 h-5" />
          </button>
          <button
            className="p-2 rounded-lg bg-gradient-to-r from-indigo-500 to-blue-700 
                     hover:from-indigo-600 hover:to-blue-600 transition-all duration-200 
                     shadow-lg shadow-cyan-500/20"
          >
            <Send className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  )
}

