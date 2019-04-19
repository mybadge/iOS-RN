//
//  RNViewController.m
//  iOS-RN
//
//  Created by Shangpin on 2019/4/19.
//  Copyright © 2019 Shangpin. All rights reserved.
//

#import "RNViewController.h"
#import "ReactView.h"

@interface RNViewController ()

@end

@implementation RNViewController


- (void)viewDidLoad {
    [super viewDidLoad];
    ReactView *reactView = [[ReactView alloc] initWithFrame:CGRectMake(0, 0, self.view.frame.size.width, self.view.frame.size.height)];
    
    [self.view addSubview:reactView];
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

@end
