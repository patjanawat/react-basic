import "./FormComponent.css"

const FormComponent = ()=>{
    const inputTitle = (event)=>{        
        console.log('title onchange...')
        console.log(event.target.value)
    }

    const inputAmount =(event)=>{        
        console.log('amount onchange...')
        console.log(event.target.value)
    }

    const saveItem = (event)=>{
        console.log('Form submit...')
        event.preventDefault()
    }
    return (
        <div>
            <form onSubmit={saveItem}>
                <div className="form-control">
                    <label>รายการ</label>
                    <input type="text" placeholder="รายการ" onChange={inputTitle}/>
                </div>
                <div className="form-control">
                    <label>จำนวน</label>
                    <input type="number" placeholder="(+ รายรับ, - รายจ่าย)" onChange={inputAmount}/>
                </div>
                <div>
                    <button type="submit" className="btn">เพิ่มข้อมูล</button>
                </div>
            </form>
        </div>
    )
}

export default FormComponent