let total = 0

function handleFunc(target) {
    const itemList = document.getElementById('select-card-id')
    const count = itemList.childElementCount
    const title = target.children[1].children[1].innerText
    const p = document.createElement('p')
    p.innerText = `${count + 1}. ${title}`
    itemList.appendChild(p)
    console.log(title)


    const price = target.children[1].children[2].innerText
    total = parseInt(total) + parseInt(price)
    const totalPriceId = document.getElementById('total-price-id')
    totalPriceId.innerText = total
    console.log(total)

}

// handle copun function

function handlerCopunFun() {
    const couponFieldId = document.getElementById('coupon-field')
    const couponValue = couponFieldId.value
    console.log(couponValue)

    if (couponValue === 'SELL200') {
        console.log('access coupon code')
        // discount id
        const discountId = document.getElementById('discound-id')
        // 
        const totalValueId = document.getElementById('total-value-id')

        const productPrice = document.getElementById('total-price-id').innerText
        const productPriceNumber = parseFloat(productPrice).toFixed(2)
        console.log(productPriceNumber)
        const discountPercentageDecimal = 20 / 100
        const discountListPrice = discountPercentageDecimal * productPriceNumber
        discountId.innerText = discountListPrice.toFixed(2)
        console.log(discountListPrice)

        const calculationPrice = productPriceNumber - discountListPrice
        totalValueId.innerText =  calculationPrice
        console.log(calculationPrice)

    }

}

  
