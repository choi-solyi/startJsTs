// unknown

declare const maybe: unknown
//const aNumber: number = maybe  /// 바로 못함


if (typeof maybe == 'number') { 
  const aNumber: number = maybe
}


if (maybe === true) {
  const aBoolean: boolean = maybe
//  const aString: string = maybe
}

// 타입오브 타입가드
if (typeof maybe === 'string'){
  const aString: string = maybe
//  const aBoolean: boolean = maybe
}

// any 보다 type-safe한 타입
