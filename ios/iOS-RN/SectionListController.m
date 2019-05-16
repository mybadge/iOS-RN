//
//  SectionListController.m
//  iOS-RN
//
//  Created by Shangpin on 2019/5/9.
//  Copyright © 2019 Shangpin. All rights reserved.
//

#import "SectionListController.h"
#import "ReactSectionListView.h"
#import "ReactViewController.h"

@interface SectionListController ()

@end

@implementation SectionListController


- (instancetype)init
{
    self = [super init];
    if (self) {
        self.modularName = @"SectionListBasics";
    }
    return self;
}

- (void)viewWillAppear:(BOOL)animated {
    [super viewWillAppear:animated];
    [self.navigationController setNavigationBarHidden:false animated:true];
}

- (void)viewDidLoad {
    [super viewDidLoad];
    self.view.backgroundColor = [UIColor whiteColor];
    
//    //self.navigationItem.title = @"我是包含RN的原生页面哟~";
//    ReactSectionListView *view = [[ReactSectionListView alloc]initWithFrame:CGRectMake(0, 0, self.view.frame.size.width,  self.view.frame.size.height)];
//    [self.view addSubview:view];
//
//
//    UIBarButtonItem *rightItem = [[UIBarButtonItem alloc] initWithTitle:@"Native Next" style:(UIBarButtonItemStylePlain) target:self action:@selector(next)];
//    self.navigationItem.rightBarButtonItem = rightItem;
}

- (void)next {
    ReactViewController *vc = [ReactViewController new];
    [self.navigationController pushViewController:vc animated:true];
    //[self.navigationController popToRootViewControllerAnimated:true];
}

+ (SectionListController *)initVC {
    NSDictionary *dict = @{@"modularName": @"SectionListBasics"};
    SectionListController *vc = [[SectionListController alloc] initWithDictionary:dict];
    return vc;
}

@end
