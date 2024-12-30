import { useLocalStorage } from '../hooks/useLocalStorage';

function UseLocalStorageDemo() {
  const [value, { setItem, removeItem }] = useLocalStorage('some-key');

  return (
    <div className="container">
      <div>
        <p>Значение из LocalStorage: {value}</p>
        <div>
          <button onClick={() => setItem('new storage value')}>
            Задать значение
          </button>
          <button onClick={() => removeItem()}>Удалить значение</button>
        </div>
      </div>
    </div>
  );
}

export default UseLocalStorageDemo;
