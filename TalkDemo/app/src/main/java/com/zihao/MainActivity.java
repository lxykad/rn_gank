package com.zihao;

import com.zihao.utils.ViewManager;

import android.os.Bundle;
import android.widget.LinearLayout;
import android.app.Activity;

public class MainActivity extends Activity {

	private LinearLayout middleLayout, headLayout;

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_main);

		headLayout = (LinearLayout) findViewById(R.id.head_layout);
		middleLayout = (LinearLayout) findViewById(R.id.middle_layout);

		ViewManager manager = new ViewManager(this);

		manager.createHotView(new String[] { "顶部测试1", "顶部测试2", "顶部测试2" },
				headLayout);

		manager.createQuestionView("问题视图", middleLayout);
		manager.createAnswerView("回答视图", middleLayout);
		manager.createQuestionView("问题视图1", middleLayout);
		manager.createAnswerView("回答视图1", middleLayout);
		manager.createQuestionView("问题视图2", middleLayout);
		manager.createAnswerView("回答视图2", middleLayout);
		manager.createQuestionView("问题视图3", middleLayout);
		manager.createAnswerView("回答视图3", middleLayout);
		manager.createQuestionView("问题视图4", middleLayout);
		manager.createAnswerView("回答视图4", middleLayout);
		manager.createQuestionView("问题视图5", middleLayout);
		manager.createAnswerView("回答视图5", middleLayout);

	}

}