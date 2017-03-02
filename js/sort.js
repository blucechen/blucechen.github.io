/**
 * Created by chen on 2017/2/23.
 */


(function (window) {
    function Sort() {

    }
    Sort.prototype = {

        //����
        quickSort: function (arr, start, end) {

            var start = (start === undefined ? 0 : start);
            var end = (end === undefined ? arr.length - 1 : end);

            if (start >= end) {//�ݹ��������
                return;
            }
            var middle = this.getMiddle(arr, start, end);
            this.quickSort(arr, start, middle - 1);
            this.quickSort(arr, middle + 1, end);
        },
        //ð��
        bubbleSort: function (arr) {
            for (var i = arr.length; i > 1; i--) {
                for (var j = 0; j < i - 1; j++) {
                    if (arr[j] > arr[j + 1]) {
                        this.swap(arr, j, j + 1);
                    }
                }
            }
        },
        //����
        insertSort: function (arr) {
            for (var i = 1; i < arr.length; i++) {
                for (var j = i; j > 0; j--) {
                    if (arr[j] < arr[j - 1]) {
                        this.swap(arr, j, j - 1);
                    } else {
                        break;//�ҵ���λ���˰�
                    }
                }
            }
        },
        //��ȡ�ֽ��
        getMiddle: function (arr, start, end) {
            var pivot = arr[end];
            var left = start;
            var right = end - 1;
            while (true) {
                while (arr[left] < pivot) {
                    left++;
                }
                while (arr[right] > pivot) {
                    right--;
                }
                if (left < right) {
                    this.swap(arr, left, right);
                    left++;
                    right--;
                } else {
                    break;
                }
            }
            this.swap(arr, left, end);//���ұ����޹ؽ�Ҫ��
            return left;
        },
        //��������ֵ
        swap: function (arr, firstIndex, secondIndex) {
            var temp = arr[firstIndex];
            arr[firstIndex] = arr[secondIndex];
            arr[secondIndex] = temp;
        },
        //���������
        getRandom: function (range) {
            var random = Math.floor(Math.random() * range);//0-9
            return random;
        },
        //�����������
        getRandomArr: function (length, range) {
            var range = range || 10;
            var length = length || 10;
            var arr = [];
            for (var i = 0; i < length; i++) {
                arr.push(this.getRandom(range));
            }
            return arr;
        }
    }
    window.Sort = Sort;

})(window);


