'use client'

import { useState, useEffect, useCallback } from 'react'

export default function EmailPopup() {
  const [visible, setVisible] = useState(false)
  const [closing, setClosing] = useState(false)

  const close = useCallback(() => {
    setClosing(true)
    setTimeout(() => {
      setVisible(false)
      setClosing(false)
      localStorage.setItem('eaindex_popup_dismissed', '1')
    }, 300)
  }, [])

  useEffect(() => {
    if (localStorage.getItem('eaindex_popup_dismissed')) return
    const timer = setTimeout(() => setVisible(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!visible || closing) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [visible, closing, close])

  if (!visible) return null

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center px-4 transition-opacity duration-300 ${
        closing ? 'opacity-0' : 'opacity-100'
      }`}
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
      onClick={close}
    >
      <div
        className={`relative w-full max-w-[600px] bg-white rounded-xl shadow-2xl p-6 sm:p-8 transition-all duration-300 ${
          closing
            ? 'opacity-0 translate-y-4'
            : 'opacity-100 translate-y-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={close}
          className="absolute top-3 right-3 w-11 h-11 flex items-center justify-center text-gray-400 hover:text-gray-700 transition-colors text-2xl leading-none rounded-lg hover:bg-gray-100"
          aria-label="Close popup"
        >
          &times;
        </button>

        <div className="mt-2">
          <iframe
            src="https://subscribe-forms.beehiiv.com/681dcb0f-823b-41dc-ac7b-0beb500429c0"
            className="beehiiv-embed w-full"
            frameBorder="0"
            scrolling="no"
            style={{ height: 315, maxWidth: '100%' }}
          />
        </div>
      </div>

      <script
        async
        src="https://subscribe-forms.beehiiv.com/embed.js"
      />
    </div>
  )
}
