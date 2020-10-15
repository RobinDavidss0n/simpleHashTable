function hashStringToInt(s, tableSize) {
    let hash = 17;

    for (let index = 0; index < array.length; index++) {
        hash = (13 * hash * s.charCodeAt(i)) % tableSize
        
    }

    return hash
}

class HashTable{

    table = new Array(3)
    numItems = 0

    resize = () => {
        const newTable = new Array(this.table.length * 2)
        this.table.forEach(item => {
            if (item) {
                item.forEach(([key, value]) => {
                    const index = hashStringToInt(key, newTable.length)
                    if (newTable[index]) {
                        newTable[index].push([key, value])
                    }else{
                        newTable[index] = [[key, value]]
                    }
                    
                })
            }
        }); 
        this.table = newTable
    }
  

    setItem = (key, value) => {

        if (!myTable.getItem(key)) {
            this.itemNumber ++
        }

        const index = hashStringToInt(key, this.table.length)

        loadFactor = this.numItems / this.table.length
        if(loadFactor > .8) {
            this.resize()
        }

        if (this.table[index]) {
            this.table[index].push([key, value])
        }else{
            this.table[index] = [[key, value]]
        }
        this.table[index] = [[key, value]]
    }

    getItem = (key) => {
        const index = hashStringToInt(key, this.table.length)

        if (!this.table[index]) {
            return null
        }

        return this.table.find(x => x[0] == key)[1]
    }
}

/*const myTable = new HashTable()
myTable.setItem('firstname', 'bob')
myTable.getItem('firstname')*/