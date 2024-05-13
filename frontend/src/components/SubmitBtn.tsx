import '../scss/SubmitBtn.scss'
interface IProps {
    onSubmit: () => void
    value: string
}


export default function Submit({value, onSubmit}: IProps){
        
    return (
        <button className='submit-btn' onClick={onSubmit}>{value}</button>
    )

}
