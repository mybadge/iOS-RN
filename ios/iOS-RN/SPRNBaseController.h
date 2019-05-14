//
//  SPRNBaseController.h
//  iOS-RN
//
//  Created by Shangpin on 2019/5/13.
//  Copyright © 2019 Shangpin. All rights reserved.
//

#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN

@interface SPRNBaseController : UIViewController

- (instancetype)initWithDictionary:(NSDictionary *)dict;

@property (nonatomic, strong) NSDictionary *RNParamterDic;
/// 模块名字
@property (nonatomic, copy) NSString *modularName;
@end

NS_ASSUME_NONNULL_END
