//
//  RCTUIManager+leaks.m
//  iOS-RN
//
//  Created by Shangpin on 2019/5/17.
//  Copyright © 2019 Shangpin. All rights reserved.
//

#import "RCTUIManager+leaks.h"

@implementation RCTUIManager (leaks)


- (NSNumber *)maxReactTagValue {
    NSMutableDictionary *mDict = [self valueForKey:@"_viewRegistry"];
    
    NSArray *sortedArr = [mDict.allKeys sortedArrayWithOptions:NSSortStable usingComparator:^NSComparisonResult(NSNumber *obj1, NSNumber *obj2) {
        return obj1.intValue > obj2.intValue;
    }];
    return (NSNumber *)[sortedArr lastObject];
}

- (NSInteger)reactViewSubviewCount {
    NSMutableDictionary *mDict = [self valueForKey:@"_viewRegistry"];
    return [mDict.allKeys count];
}

@end
