//
//  SPReactRootViewManager.h
//  iOS-RN
//
//  Created by Shangpin on 2019/5/14.
//  Copyright © 2019 Shangpin. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTRootView.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTBridge.h>

NS_ASSUME_NONNULL_BEGIN

@interface SPReactRootViewManager : NSObject
// 全局唯一的bridge
@property (nonatomic, strong, readonly) RCTBridge * bridge;

/*
 * 获取单例
 */
+ (instancetype)manager;

/*
 * 根据viewName预加载bundle文件
 * param:
 *     viewName RN界面名称
 *     initialProperty: 初始化参数
 */
- (void)preLoadRootViewWithName:(NSString *)viewName;
- (void)preLoadRootViewWithName:(NSString *)viewName initialProperty:(NSDictionary *)initialProperty;

/*
 * 根据viewName获取rootView
 * param:
 *     viewName RN界面名称
 *
 * return: 返回匹配的rootView
 */
- (RCTRootView *)rootViewWithName:(NSString *)viewName;

@end

NS_ASSUME_NONNULL_END
