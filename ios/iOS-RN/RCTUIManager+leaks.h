//
//  RCTUIManager+leaks.h
//  iOS-RN
//
//  Created by Shangpin on 2019/5/17.
//  Copyright © 2019 Shangpin. All rights reserved.
//

#import <React/RCTUIManager.h>

NS_ASSUME_NONNULL_BEGIN

@interface RCTUIManager (leaks)

- (NSNumber *)maxReactTagValue;
- (NSInteger)reactViewSubviewCount;
@end

NS_ASSUME_NONNULL_END
