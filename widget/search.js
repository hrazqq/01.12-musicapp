import styles from './search.module.css';

export const Search = ({func}) =>{
    return(
        <div>
            <input className={styles.input}
            placeholder='Поиск...'
            onChange={func}/>
        </div>
    )
}