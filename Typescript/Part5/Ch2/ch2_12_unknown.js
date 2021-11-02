"use strict";
// unknown
//const aNumber: number = maybe  /// 바로 못함
if (typeof maybe == 'number') {
    var aNumber = maybe;
}
if (maybe === true) {
    var aBoolean = maybe;
    //  const aString: string = maybe
}
// 타입오브 타입가드
if (typeof maybe === 'string') {
    var aString = maybe;
    //  const aBoolean: boolean = maybe
}
// any 보다 type-safe한 타입
