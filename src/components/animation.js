const fadeIn = {
  enter: {
    x: "-100%",
    opacity: 0,
    transition: {
      duration: .5,
      ease: 'easeInOut',
    }
  },
  active: {
    opacity: 1,
    x: 0,
    transition: {
      duration: .5,
      ease: 'easeInOut',
    }
  }
}

export { fadeIn }