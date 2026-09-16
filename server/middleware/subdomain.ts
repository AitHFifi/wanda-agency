import { defineEventHandler, getRequestHost, getRequestURL, sendRedirect } from 'h3'

export default defineEventHandler((event) => {
  const host = getRequestHost(event)
  const url = getRequestURL(event)

  // 1. Detection des sous-domaines dedies au Journal d'Emeraude
  // Ex: emeraude.wanda-agency.studio, journal.wanda-agency.studio, etc.
  const isEmeraudeSubdomain =
    host.startsWith('emeraude.') ||
    host.startsWith('journal.') ||
    host.startsWith('journal-emeraude.')

  if (isEmeraudeSubdomain) {
    if (url.pathname === '/' || url.pathname === '') {
      return sendRedirect(event, '/journal-emeraude/', 302)
    }
  }

  // 2. Raccourcis d'acces : /emeraude -> /journal-emeraude/
  if (url.pathname === '/emeraude' || url.pathname === '/emeraude/') {
    return sendRedirect(event, '/journal-emeraude/', 301)
  }

  // 3. Normalisation automatique du trailing slash pour les assets relatifs
  if (url.pathname === '/journal-emeraude') {
    return sendRedirect(event, '/journal-emeraude/', 301)
  }
})
