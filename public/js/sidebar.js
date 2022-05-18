const $ = document.querySelector.bind(document)

// Xử lý menu icons
const handleOpen = () => {
  $('.bars').classList.add('d-none')
  $('.times').classList.remove('d-none')

  $('.menu-icons').setAttribute('style', 'left: 260px;')

  $('.sidebar-container').classList.remove('d-none')
}

const handleClose = () => {
  $('.bars').classList.remove('d-none')
  $('.times').classList.add('d-none')

  $('.menu-icons').setAttribute('style', 'left: 20px;')

  $('.sidebar-container').classList.add('d-none')
}

if ($('.bars')) {
  $('.bars').onclick = () => {
    handleOpen()
  }
}

if ($('.times')) {
  $('.times').onclick = () => handleClose()
}
