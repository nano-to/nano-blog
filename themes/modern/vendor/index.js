const fs = require("fs")
const path = require("path")
const ejs = require('ejs')
const moment = require('moment')
const Markdown = require('markdown-it'),
	md = new Markdown();

// classic
moment.suppressDeprecationWarnings = true;

// settings
const theme = 'nano'
const source = './source'
const dest = './docs'
const blog_path = 'blog'

var articles = []

fs.readdirSync(source).forEach(file => {
	var content = fs.readFileSync('./source/' + file, { encoding: "utf8" })
	var parse = content.split('-----')
	var options = parse[0]
	var slug = file.replace('.md', '')
	var tile = options.split('\n')[0].replace('title: ', '')
	var date = options.split('\n')[1].replace('date: ', '')
		date = moment(date)
	var tags = options.split('\n')[2].replace('tags: ', '')
	var body = parse[1].replace('\n', '')
	articles.push({ 
		path: (source + '/' + file), 
		slug: slug,
		tile: tile,
		date: date.format('LLL'),
		fromNow: date.fromNow(),
		tags: tags.split(',').map(a => a && a.toLowerCase().trim()),
		content: body,
		html: md.render(body)
	})
})

// if (!fs.existsSync(dest)) fs.mkdirSync(dest)
// if (blog_path && !fs.existsSync(dest + '/' + blog_path)) fs.mkdirSync(dest + '/' + blog_path)

// var index_html = fs.readFileSync(`./themes/${theme}/index.html`, { encoding: "utf8" })
// fs.writeFileSync(`${dest}/index.html`, ejs.render(index_html, articles), { encoding: "utf8" } )

// for (var article of articles) {
// 	var single_html = fs.readFileSync(`./themes/${theme}/index.html`, { encoding: "utf8" })
// 		single_html = ejs.render(single_html, { article })
// 	fs.writeFileSync(`${dest}${blog_path ? '/' + blog_path : '' }/${article.slug}.html`, single_html, { encoding: "utf8" } )
// }

function copyFolderSync(from, to) {
    if (!fs.existsSync(from)) fs.mkdirSync(to);
    fs.readdirSync(from).forEach(element => {
        if (fs.lstatSync(path.join(from, element)).isFile()) {
            fs.copyFileSync(path.join(from, element), path.join(to, element));
        } else {
            copyFolderSync(path.join(from, element), path.join(to, element));
        }
    });
}

copyFolderSync(`./themes/${theme}/css`, `${dest}`)
copyFolderSync(`./themes/${theme}/img`, `${dest}`)
copyFolderSync(`./themes/${theme}/js`, `${dest}`)
