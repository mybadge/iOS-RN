//
//  SingleClass.h
//  iOS-RN
//
//  Created by Shangpin on 2019/5/7.
//  Copyright © 2019 Shangpin. All rights reserved.
//

#import <Foundation/Foundation.h>

@class RCTBridge;

NS_ASSUME_NONNULL_BEGIN

@interface SingleClass : NSObject
/// 需要在Appdelegate 中 第一次调用.
+ (instancetype)initWithLaunchOptions:(NSDictionary *)launchOptions;

+ (instancetype)shared;

@property (nonatomic, strong) RCTBridge *bridge;
@end

NS_ASSUME_NONNULL_END
