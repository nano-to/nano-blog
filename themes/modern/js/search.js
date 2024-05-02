var index = -1
var data = []

async function fetchData() {
  const response = await fetch("/api.json")
  data = await response.json()
}

fetchData()

function toggle_submenu(e) {
	let submenus = document.querySelectorAll('.menu-item');
  submenus.forEach((item, i) => item.classList.remove('active'))
  e.classList.add('active')
}

function toggle_menu(e) {
	var menu = document.getElementById('mobile-menu')
	// console.log( document.getElementById('mobile-menu').style.display )
	menu.style.display = menu.style.display !== 'flex' ? 'flex' : 'none'
	// document.getElementById('search').style.display = 'none'
	// document.onkeydown = null
	// console.log( menu.style.display )
}

function hide_search(e) {
	document.getElementById('search-backdrop').style.display = 'none'
	document.getElementById('search').style.display = 'none'
	document.onkeydown = null
	index = -1
}


function show_search(e) {
	document.getElementById('search-backdrop').style.display = 'block'
	document.getElementById('search').style.display = 'block'
	document.getElementById("search-input").focus()
	document.onkeydown = function(evt) {
	    evt = evt || window.event;
	    var isEscape = false;
	    if ("key" in evt) {
	        isEscape = (evt.key === "Escape" || evt.key === "Esc");
	    } else {
	        isEscape = (evt.keyCode === 27);
	    }
	    if (isEscape) {
	        hide_search()
	    }
	    // moveIndex()
    	let searchItems = document.querySelectorAll('.search-item');
    	function setActive(index) {
		    searchItems.forEach((item, i) => {
		      if (i === index) {
		        item.classList.add('active');
		      } else {
		        item.classList.remove('active');
		      }
		    });
		  }
	    if (evt.key === 'ArrowUp') {
	    	index = index - 1 <= 0 ? 0 : index - 1
	    	setActive(index)
	    	return evt.preventDefault()
	    }
	    if (evt.key === 'ArrowDown') {
	    	index = index + 1 >= searchItems.length ? 0 : index + 1
	    	setActive(index)
	    	console.log( index, searchItems.length )
	    	return evt.preventDefault()
	    }
	    if (evt.key === 'Enter') {
	    	var enter_index = index === -1 ? 0 : index
	    	window.location.href = searchItems[enter_index].getAttribute('href');
	    }
	}
}

function reset_search(e) {
	document.getElementById('search-input').value = ''
	document.getElementById('clear-search').style.display = 'none'
	document.getElementById('search-results').innerHTML = ''
}

function search(e) {
	if (!e.value) return reset_search()
	document.getElementById('clear-search').style.display = 'block'
	var found = data.filter(a => {
		return a.title.toLowerCase().includes(e.value.toLowerCase()) || 
			a.tags.toLowerCase().includes(e.value.toLowerCase()) ||
			a.html.toLowerCase().includes(e.value.toLowerCase()) 
	})
	var html = ``
	var categories = []
	found.map(a => !categories.includes(a.tags) ? categories.push(a.tags) : '')
	categories.map(b => {
		var related = found.filter(a => a.tags === b)
		var related_html = related.map(a => `<a href="${a.permalink}" class="search-item"><h2>${a.title}</h2></a>`).join('')
		// var related_html = related.map(a => `<div class="search-item"><h2>${a.title}</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></div>`).join('')
		html += `<div class="search-item-wrapper"><div class="search-category">${b}</div>${ related_html }</div>`
	})
	document.getElementById('search-results').innerHTML = html
	index = -1
}