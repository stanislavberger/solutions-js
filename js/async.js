const myAsyncFunction = async () => {
    console.log('Function is starting.. wait 2 seconds')

    await new Promise((res) => {
        setTimeout(() => {
            console.log('2 second past');
            res()
        }, 2000)
    })

    await new Promise((res) => {
        console.log('This is another Promise')
        res()
    })

    console.log('end')
}

myAsyncFunction()