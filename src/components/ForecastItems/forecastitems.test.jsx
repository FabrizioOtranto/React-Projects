import React from 'react'
import Forecastitems from './Forecastitems'
import { render } from '@testing-library/react'

test('forecastitems render', async()=>{

    const {findByText} = render(<Forecastitems weekDay = {'lunes'}  hour = {10} state='clear' temperature = {23} /> )
    const weekday = await findByText(/lunes/)
    const hour = await findByText(/10/)
    const temp = await findByText(/23/)
    
    expect(weekday).toHaveTextContent('lunes')
    expect(hour).toHaveTextContent('10')
    expect(temp).toHaveTextContent('23')

})