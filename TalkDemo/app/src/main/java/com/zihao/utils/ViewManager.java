package com.zihao.utils;

import android.annotation.SuppressLint;
import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.View.OnClickListener;
import android.webkit.WebView;
import android.widget.LinearLayout;
import android.widget.TextView;

import com.zihao.R;

/**
 * 视图管理类
 * 
 * @author zihao
 * 
 */
public class ViewManager {

	private Context mContext;
	private LayoutInflater inflater;

	public ViewManager(Context context) {
		// TODO Auto-generated constructor stub
		this.mContext = context;
		inflater = LayoutInflater.from(mContext);
	}

	/**
	 * 创建热点视图
	 * 
	 * @param msgs
	 * @param layout
	 */
	public void createHotView(String[] msgs, LinearLayout layout) {

		if (msgs.length > 0) {

			for (int i = 0; i < msgs.length; i++) {

				View view = inflater.inflate(R.layout.head_text_layout, null);

				TextView questionText = (TextView) view
						.findViewById(R.id.hot_text);
				questionText.setText(msgs[i]);

				layout.addView(view);
			}

		} else {
			return;
		}

	}

	/**
	 * 创建提问视图
	 * 
	 * @param questionStr
	 * @param layout
	 */
	public void createQuestionView(String questionStr, final LinearLayout layout) {

		final View view = inflater.inflate(
				R.layout.chatting_item_msg_text_right, null);

		final TextView questionText = (TextView) view
				.findViewById(R.id.tv_chatcontent);
		questionText.setText(questionStr);

		questionText.setOnClickListener(new OnClickListener() {// 为显示的问题视图添加点击事件

					@Override
					public void onClick(View v) {
						// TODO Auto-generated method stub
						removeView(layout, view);// 删除指定的View
					}
				});

		layout.addView(view);
	}

	/**
	 * 创建回答视图
	 * 
	 * @param answerStr
	 * @param layout
	 */
	public void createAnswerView(String answerStr, LinearLayout layout) {

		View view = inflater
				.inflate(R.layout.chatting_item_msg_text_left, null);

		TextView answerText = (TextView) view.findViewById(R.id.tv_chatcontent);
		answerText.setText(answerStr);

		layout.addView(view);
	}

	/**
	 * 创建浏览器视图
	 * 
	 * @param url
	 * @param layout
	 */
	@SuppressLint("SetJavaScriptEnabled")
	public void createWebView(String url, LinearLayout layout) {
		View view = inflater.inflate(R.layout.webview_layout, null);

		WebView mWebView = (WebView) view.findViewById(R.id.middle_webview);
		mWebView.getSettings().setJavaScriptEnabled(true);
		mWebView.loadUrl(url);

		layout.addView(view);
	}

	/**
	 * 删除指定布局中的子视图
	 * 
	 * @param layout
	 */
	public void removeAllView(LinearLayout layout) {
		layout.removeAllViews();
	}

	/**
	 * 根据索引删除指定视图
	 * 
	 * @param layout
	 * @param index
	 */
	public void removeViewByIndex(LinearLayout layout, int index) {
		layout.removeViewAt(index);
	}

	/**
	 * 删除指定的View
	 * 
	 * @param layout
	 * @param view
	 */
	public void removeView(LinearLayout layout, View view) {
		layout.removeView(view);
	}
}