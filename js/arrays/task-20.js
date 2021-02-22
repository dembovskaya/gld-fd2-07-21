// Создать отсортированный массив чисел. 
// Реализовать функцию binarySearch(arr, value), которая принимает массив и значение и возвращает индекс значения в массиве или -1.
// Функция должна использовать бинарный поиск.
// Вывести результат в консоль

const arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

function binarySearch(arr, value) {
	let left = 0;                          
	let right = arr.length-1;  

	while (left <= right) {            
		let mid = Math.floor((left + right) / 2); 

		if (arr[mid] > value) {
            right = mid -1;                             
		} else if (arr[mid] < value) {
			left  = mid +1;                           
		} else {
			return mid;                                  
		}
	}
	return -1;           
}

console.log(binarySearch(arr, 17));