import "./Button.css";

interface btnType {
    classBtn?: string,
    textBtn: string
    btnFunc?:() => void,
    btnType?:any
}

const DynamicBtn = ({ classBtn, textBtn, btnFunc, btnType }: btnType) => {
    return (
        <>
            <button type={btnType} className={classBtn?classBtn:"singin_btn"} onClick={btnFunc}>{textBtn}</button>
        </>
    )
}
export default DynamicBtn