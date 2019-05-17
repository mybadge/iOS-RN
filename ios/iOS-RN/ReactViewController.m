//
//  TwoViewController.m
//  iOS-RN
//
//  Created by 郭洪安 on 2017/7/11.
//  Copyright © 2017年 UIViewCon. All rights reserved.
//

#import "ReactViewController.h"
#import "ReactView.h"
#import "AppDelegate.h"
#import "ThreeViewController.h"
#import "ViewController.h"
#import "SectionListController.h"

@interface ReactViewController ()

@end

@implementation ReactViewController

- (instancetype)init
{
    self = [super init];
    if (self) {
        self.modularName = @"iOSRN";
    }
    return self;
}

- (void)viewDidLoad {
    [super viewDidLoad];
    self.view.backgroundColor = [UIColor whiteColor];
    self.navigationController.navigationBarHidden = YES;
    
    
    
    //self.navigationItem.title = @"我是包含RN的原生页面哟~";
//    ReactView * reactView = [[ReactView alloc]initWithFrame:CGRectMake(0, 0, self.view.frame.size.width,  self.view.frame.size.height)];
//    [self.view addSubview:reactView];
    
    
    UIBarButtonItem *rightItem = [[UIBarButtonItem alloc] initWithTitle:@"Next" style:(UIBarButtonItemStylePlain) target:self action:@selector(backTopAction)];
    self.navigationItem.rightBarButtonItem = rightItem;
}
- (void)backTopAction {
    if (self.navigationController.childViewControllers.count > 40) {
        [self.navigationController popToRootViewControllerAnimated:true];
    } else {
        SectionListController *vc = [SectionListController initVC];
        [self.navigationController pushViewController:vc animated:true];
    }
}

- (void)touchesBegan:(NSSet<UITouch *> *)touches withEvent:(UIEvent *)event {
    [self dismissViewControllerAnimated:true completion:nil];
}


/*
 #pragma mark - Navigation
 
 // In a storyboard-based application, you will often want to do a little preparation before navigation
 - (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
 // Get the new view controller using [segue destinationViewController].
 // Pass the selected object to the new view controller.
 }
 */
- (void)dealloc {
    NSLog(@"TwoViewController 释放了");
}
@end
