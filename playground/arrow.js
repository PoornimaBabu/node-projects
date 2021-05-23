const add = (x) =>  x + x

console.log(add(10))

const title = "Test"

const book = {
    title: "Atomic Habits",
    ESPN: 10011-11,
    chapters: ['One', 'Two'],
    printDetails(){
        console.log("Title:" + this.title + " ESPN:" + this.ESPN )
        this.chapters.map((chap) => {
            console.log("Chapter Name:" + chap + '' + this.title)
        } )
    }
}

book.printDetails()

