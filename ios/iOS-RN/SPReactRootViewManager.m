//
//  SPReactRootViewManager.m
//  iOS-RN
//
//  Created by Shangpin on 2019/5/14.
//  Copyright © 2019 Shangpin. All rights reserved.
//

#import "SPReactRootViewManager.h"

@interface SPReactRootViewManager ()
// 以 viewName-rootView 的形式保存需预加载的RN界面
@property (nonatomic, strong) NSMutableDictionary<NSString *, RCTRootView*> * rootViewMap;

@end

@implementation SPReactRootViewManager

- (void)dealloc {
    _rootViewMap = nil;
    [_bridge invalidate];
    _bridge = nil;
}

+ (instancetype)manager {
    static SPReactRootViewManager * _rootViewManager = nil;
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        _rootViewManager = [[SPReactRootViewManager alloc] init];
    });
    return _rootViewManager;
}

- (instancetype)init {
    if (self = [super init]) {
        _rootViewMap = [NSMutableDictionary dictionaryWithCapacity:0];
        _bridge = [[RCTBridge alloc] initWithDelegate:self launchOptions:nil];
    }
    return self;
}

- (void)preLoadRootViewWithName:(NSString *)viewName {
    [self preLoadRootViewWithName:viewName initialProperty:nil];
}

- (void)preLoadRootViewWithName:(NSString *)viewName initialProperty:(NSDictionary *)initialProperty {
    if (!viewName && [_rootViewMap objectForKey:viewName]) {
        return;
    }
    NSMutableDictionary *tmpInitialProperty = [NSMutableDictionary dictionaryWithDictionary:initialProperty];
    [tmpInitialProperty setObject:viewName forKey:@"viewName"];
    // 由bridge创建rootView
    RCTRootView * rnView = [[RCTRootView alloc] initWithBridge:self.bridge
                                                    moduleName:@"YourAppName"
                                             initialProperties:initialProperty];
    [_rootViewMap setObject:rnView forKey:viewName];
}

- (RCTRootView *)rootViewWithName:(NSString *)viewName {
    if (!viewName) {
        return nil;
    }
    return [self.rootViewMap objectForKey:viewName];
}

#pragma mark - RCTBridgeDelegate
- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge {
    return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
}
@end
