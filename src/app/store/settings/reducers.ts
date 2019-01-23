import * as actions from './actions'

const STORED_SETTINGS = (storedSettings: any) => {
  const settings = {}
  Object.keys(storedSettings).forEach(key => {
    const item = localStorage.getItem(`app.settings.${key}`)
    settings[key] = item === null ? storedSettings[key] : item
  })
  return settings
}

export const initialState: any = {
  // default settings, if not exist in localStorage
  ...STORED_SETTINGS({
    isMobileView: false,
    isMobileMenuOpen: false,
    isLightTheme: false,
    isSettingsOpen: false,
    isMenuTop: false,
    isMenuCollapsed: false,
    isBorderless: true,
    isSquaredBorders: false,
    isFixedWidth: false,
    isMenuShadow: true,
  }),
}

export function reducer(state = initialState, action: actions.Actions): any {
  switch (action.type) {
    case actions.SET_STATE:
      return { ...state, ...action.payload }
    default:
      return state
  }
}

export const getSettings = (state: any) => state
