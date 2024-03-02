## Arrays

There are 2 types of arrays in js:

- Continuous/Packed
- Holey

JS Does three types of optimizations:
1. SMI - Small integer
2. Packed element
3. Double (float, string, function)


If array is like this:
```js
const arrTwo = [1, 2, 3, 4, 5]
```
It is of type `PACKED_SMI_ELEMENTS`

Now, if we push a double element into it,
```js
arrTwo.push(6.0)
```
It becomes of type `PACKED_DOUBLE_ELEMENTS`

And if we push a string into the same array,
```js
arrTwo.push('7')
```
It becomes of type `PACKED_ELEMENTS`


V8 engine does different optimizations for different types of arrays.

> Note: Once an array goes from `PACKED_SMI_ELEMENTS` to `PACKED_DOUBLE_ELEMENTS`, even if the double value is removed, it does not go back to PACKED_SMI_ELEMENTS


Now, if an element is inserted at the 10th position directly
```js
arrTwo[10] = 10
```
it becomes of type `HOLEY_ELEMENTS`


### Degree of Optimization
SMI > DOUBLE > PACKED

Same sequence is followed for continuous as well as holey arrays

And once downgraded, it is almost impossible to upgrade.


> Note: NaN, Infinity are treated as PACKED_DOUBLE

References:

- https://youtu.be/ZRS485LxX0s?si=ajcurTLfKEWbrbUi